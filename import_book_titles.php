<?php

namespace ProcessWire;
// Include ProcessWire bootstrap file
include('./index.php');

// Function to create a book page with only the title
function createBookPage($title)
{
  global $pages, $sanitizer;

  // Ensure we have a valid title
  if (empty($title)) return;

  $p = new Page();
  $p->template = 'book';
  $p->parent = $pages->get('/books/'); // Adjust parent as needed

  // Create a valid name for the page
  $name = $sanitizer->pageName($title);

  // // Ensure the name is not empty
  // if (empty($name)) {
  //   $name = 'book-' . time(); // Use a timestamp if the sanitized title is empty
  // }

  // // Ensure the name is unique
  // $name = $pages->get('/books/')->name . $name;

  $p->name = $name;
  $p->title = $title;

  $p->of(false);
  try {
    $p->save();
    echo "Saved page: $title\n";
  } catch (WireException $e) {
    echo "Error saving page '$title': " . $e->getMessage() . "\n";
  }
}

// Read and process CSV
$handle = fopen('books.csv', 'r');
if ($handle) {
  $batchSize = 1000;
  $batch = [];
  $isFirstRow = true;

  while (($row = fgetcsv($handle)) !== false) {
    if ($isFirstRow) {
      $isFirstRow = false;
      continue; // Skip header row
    }

    if (empty($row[1])) continue; // Skip if title is empty (assuming title is in the second column)

    $batch[] = $row[1]; // Add title to batch

    if (count($batch) >= $batchSize) {
      foreach ($batch as $title) {
        createBookPage($title);
      }
      $batch = [];
      wire('pages')->uncacheAll();
    }
  }

  // Process any remaining entries
  foreach ($batch as $title) {
    createBookPage($title);
  }
  fclose($handle);
}

echo "Import completed!";
