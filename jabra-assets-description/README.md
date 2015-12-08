# Jabra assets

This is a repository for storing the assets used by Jabra Online IT team. 
[Instructions](#2-how-to-use)

### 1. File Structure:

Each first level folder contains 4 subfolders:
+ *ProjectName\Assets* - All the assets used in the project, such as fonts, images (exported from the mockups as well)
+ *ProjectName\Inbox* - General storage for unsorted but 'need to keep' data, such as alternate mockups or any other necessary information in any format
+ *ProjectName\Screens* - Detailed screens of all states saved from the mockups, to be used for hotlinking in Userstories and for prototyping
+ *ProjectName\Sources* - All the actual mockups in up-to date states. Used for hotlinking in Userstories as well.

```
ProjectName\
|-- Assets\
|   |-- Fonts\
|   |   |-- Some-font.woff
|   |   |-- Some-font.eot
|   |   |-- Some-font.ttf
|   |-- Images\
|   |   |-- image.png
|   |   |-- image.jpg
|   |   |-- image.svg
|   |   `-- image.png
|-- Inbox\
|   |-- An important Excel stylesheet with data.xlsx
|   |-- Workflow presentation.pptx
|   `-- An-old-mockup.psd
|-- Screens\
|   |-- Desktop\
|   |   |-- 00-Desktop-Mockup.jpg
|   |   |-- ...
|   |   `-- 27-Desktop-Mockup-Partner-Signout-Form-Collapsed.jpg
|   |-- Tablet\
|   `-- Mobile\
`-- Sources\
    |-- ProjectName-desktop.psd
    |-- ProjectName-tablet-landscape.psd
    |-- ProjectName-tablet-portrait.psd
    |-- ProjectName-mobile-landscape.psd
    `-- ProjectName-mobile-portrait.psd
```

-----------------------
### 2. How to use:

*Prerequisites: installed TortoiseGit client [https://tortoisegit.org/download/](https://tortoisegit.org/download/)*

#### There are 2 basic actions needed for normal process: pull and (stage->commit->)push. [Pull](#pull) is used to get changes from the repository, [Push](#push) is used to send changes.

 Technically, adding files to the repository includes 3 steps: stage, commit and push:
 1. *Staging* is when you check what changes to include into commit;
 2. *Committing* is like wrapping the changes in a 'bundle' with number and description, which is stored locally
 3. *Pushing* is publishing the commits to make them available globally for everyone.

#### It is highly recommended to make PULL before sending your changes.

-----------------------

### PULL 
[id]:pull

1. Right click anywhere on empty space in the File Explorer window in the repository root folder, select Git Pull. (needs to be added to context menu in Settings, otherwise use TortoiseGit->Push).<br/>
![pull00](https://raw.githubusercontent.com/gunnzolder/gunnzolder.github.io/master/jabra-assets-description/.images/pull-00-context-menu.png?raw)<br/>

2. OK to pull.<br/>
![pull01](https://raw.githubusercontent.com/gunnzolder/gunnzolder.github.io/master/jabra-assets-description/.images/pull-01-pull.png?raw)<br/>

3. Close, successfully pulled.<br/>
![pull02](https://raw.githubusercontent.com/gunnzolder/gunnzolder.github.io/master/jabra-assets-description/.images/pull-02-success.png?raw)<br/>

-----------------------

### PUSH 
[id]:push

1. Right click anywhere on empty space in the File Explorer window in the repository root folder, select Commit -> Master.<br/>
![commit00](https://raw.githubusercontent.com/gunnzolder/gunnzolder.github.io/master/jabra-assets-description/.images/commit-00-context-menu.png?raw)<br/>

2. Write a comment, select files to be added to commit (usually all, by clicking 'All'). Then click OK to submit.<br/>
![commit01](https://raw.githubusercontent.com/gunnzolder/gunnzolder.github.io/master/jabra-assets-description/.images/commit-01-stage.png?raw)<br/>

3. Push. Commit is done, push it to the server.<br/>
![commit02](https://raw.githubusercontent.com/gunnzolder/gunnzolder.github.io/master/jabra-assets-description/.images/commit-02-commit.png?raw)<br/>

4. OK to push.<br/>
![commit03](https://raw.githubusercontent.com/gunnzolder/gunnzolder.github.io/master/jabra-assets-description/.images/commit-03-push.png?raw)<br/>

5. Close, successfully pushed.<br/>
![commit04](https://raw.githubusercontent.com/gunnzolder/gunnzolder.github.io/master/jabra-assets-description/.images/commit-04-success.png?raw)

