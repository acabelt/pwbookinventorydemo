<?php

namespace ProcessWire;

if (!defined("PROCESSWIRE")) die();

/** @var ProcessWire $wire */

/**
 * ProcessWire Bootstrap Initialization
 * ====================================
 * This init.php file is called during ProcessWire bootstrap initialization process.
 * This occurs after all autoload modules have been initialized, but before the current page
 * has been determined. This is a good place to attach hooks. You may place whatever you'd
 * like in this file. For example:
 *
 * $wire->addHookAfter('Page::render', function($event) {
 *   $event->return = str_replace("</body>", "<p>Hello World</p></body>", $event->return);
 * });
 *
 */

function sendHTML(string $partial, array $data)
{
  $twig = wire('modules')->get('TemplateEngineFactory');
  return $twig->render(
    "partials/$partial",
    $data
  );
}

$wire->addHook('/search/', function ($event) {
  $query = $event->input->get('query');
  $books = pages()->findMany("template=book, title*=$query, limit=3000");
  $event->return = sendHTML('Book', ['books' => $books]);
});
