# Taxman
## a taxonomy editor

### Setup

to use execute `python app.py` in the command line

### Use

click to drag any node to any other node. It will bring its children with it and recompute the hierarchy.

right click on any node to bring up a context menu

use the context menu to edit info about each node, delete that node, or add children to the node.

When adding children you can give it a comma seperated list to create multiple children.

Clicking save on the context menu will produce an updated json string. 
TODO have save, persist to database via the api. right now it just prints to console
