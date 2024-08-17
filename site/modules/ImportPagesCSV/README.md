# ImportPagesCSV: Import CSV file to pages

This is a ProcessWire module that enables you to import CSV files to create pages
or modify existing pages. The module requires ProcessWire 3.0.123 or newer. 
This is an admin/development tool that is recommended only for use by the 
superuser or developer. 

The following Fieldtypes are supported for importing, as well as most types 
derived from them: 

- Checkbox
- Datetime
- Email
- File
- Float
- Image
- Integer
- Options
- Page
- PageTitle
- Text
- Textarea
- URL

## To install:

1. Place the file ImportPagesCSV.module in a /site/modules/ImportPagesCSV/ directory. 
2. In ProcessWire admin, click to 'Modules' and 'Check for new modules'. 
3. Click 'install next to the 'Import Pages CSV' module (under heading 'Import'). 

Once installed, the module can be found on your admin Setup menu under the title "Import 
Pages CSV". 

## Importing file/image fields

CSV column should contain full URL (or diskpath and filename) to the file you want to import. 
For fields that support multiple files, place each filename or URL on its own line, OR separate 
them by | (pipe) OR tab.

## Importing page reference fields

For single-value page fields the CSV imported value can be the page id, path, title, or name.
For multi-value page fields, the value can be the same but multiple-values should be separated by 
either a newline in the column, or a pipe "|" character. Please make sure that your Page reference 
field has one or more pages selected for the "Parent" setting on the Details tab. If you want the 
import to be able to create paes, there must also be a single Template selected on the "Template" 
setting. 


---
Copyright 2011-2021 by Ryan Cramer for ProcessWire

