var documenterSearchIndex = {"docs":
[{"location":"Lesson1/0_windows/#Step-0:-Windows-users-need-Windows-Subsystem-for-Linux-(WSL)-1","page":"Windows Users","title":"Step 0: Windows users need Windows Subsystem for Linux (WSL)","text":"","category":"section"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"If you are working on a Mac, you can skip this section and go straight to Getting started with the terminal. <!– TODO: Add link –>","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"The inner guts of the Windows operating system are different than those of Mac and Linux. The bad news is, many computational biology tools expect the later, a so-called \"Unix\" environment. The good news is that Windows 10 has a way to run a Unix environment side-by-side with Windows.","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"note: Windows Users\nThroughout this course, you will see boxes like this labeled \"Windows Users.\" These contain information about ways in which Windows is different from Unix operating systems. Pay careful attention to these boxes, since other instructions may be unclear if you don't modify them accordingly.","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"Much of this guide was cribbed from Michael Treat's guide, which has a lot more information and a video that you may find useful.","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"Before you begin check to make sure that you have the most recent version of Windows 10.","category":"page"},{"location":"Lesson1/0_windows/#Step-0.1-Enable-the-WSL-Feature-through-Windows.-1","page":"Windows Users","title":"Step 0.1 - Enable the WSL Feature through Windows.","text":"","category":"section"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"Right click on the start menu and click on Settings.\nIn the Search box, type Turn Windows Features On Or Off and click on the item that populates in the list.\nA window will pop up with a list of folders with checkboxes next to them. Scroll down and check the box for Windows Subsystem for Linux.","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"This will install the needed files. Follow any directions that pop up and restart when asked.","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"This guide might not open after restart, so be sure to make note of the url or star this repo.","category":"page"},{"location":"Lesson1/0_windows/#Step-0.2-Install-the-Ubuntu-app-from-the-Windows-Store.-1","page":"Windows Users","title":"Step 0.2 - Install the Ubuntu app from the Windows Store.","text":"","category":"section"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"Click here to go to Microsoft store and install the Ubuntu App\nFollow the on-screen prompts to install the app.\nWhen the app is ready, the button that said 'Install' will change to say 'Launch'. Click Launch. This will start the Ubuntu installation. This installation only happens the first time the app is launched. It's the actual Ubuntu (or Linux) OS installing and mounting to your Windows FS.","category":"page"},{"location":"Lesson1/0_windows/#Step-0.3-Finish-Installing-the-Ubuntu-App.-1","page":"Windows Users","title":"Step 0.3 - Finish Installing the Ubuntu App.","text":"","category":"section"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"It will ask you to enter a username. This will be the root / admin user for the Ubuntu FS. Do not include spaces in your username.\nIt will then ask you to enter and confirm a password. Also note that it will protect your password by not displaying it to the screen when you type, but it is registering your key strokes.","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"note: Note\nSecurity is important at all levels,  so even though you have to use this password often,  don't be tempted to make it too simple.  Essentially all of your Window's files can be viewed and modified by this user,  so keep that password safe and strong.Also be careful not to mess with any permissions!  If you think you need to do that to complete this setup,  then stop and reach out to me.  You should NOT have to worry about any permissions with this,  and if you do get stuck there then I need to know so I can help troubleshoot you through this,  or so we know we need to update this guide*.","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"Finally, the prompt will change and you will be on a command line. Type pwd and press enter to see where you currently are in the FS. you should be at /home/<your username>. This is the root level of your Ubuntu user (more on that later).","category":"page"},{"location":"Lesson1/0_windows/#Step-0.4-Updating-Default-Software.-1","page":"Windows Users","title":"Step 0.4 - Updating Default Software.","text":"","category":"section"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"You will need to run a quick couple commands in order to run updates software updater. The Ubuntu OS is shipped with a ton of built-in software, but those libraries may have had more recent updates come out since the OS was shipped. Updating this now is quick and will help you stay current and protected.","category":"page"},{"location":"Lesson1/0_windows/#","page":"Windows Users","title":"Windows Users","text":"In the terminal, type sudo apt-get update and press enter. (you may need to enter your password)\nWhat does sudo apt-get update do?\nOnce that is complete, execute sudo apt-get upgrade. Press y when prompted.\nWhat does sudo apt-get upgrade do?\nOnce that is done, type sudo apt autoremove. This will remove any packages that are no longer needed.\nWhat does sudo apt-get autoremove do?","category":"page"},{"location":"Lesson1/2_git/#Part-2-git-for-version-control-1","page":"Using the Terminal","title":"Part 2 - git for version control","text":"","category":"section"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"If you've ever worked on an assignment and ended up with a list of files like","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"assignment1.docx\nassignment1_v2.docx\nassignment1_v2_kevins_comments.docx\nassignment1_v3_fix_final.docx\nassignment1_v3_fix_final_for_real_this_time.docx","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"... you'll understand the importance of version control.","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"It goes well beyond naming of course. How can you tell what changed between version 1 and version2? Does version 3 take the comments Kevin made on v2 into account? Is ...fix_final_for_real_this_time really the last version?","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"It's even worse if multiple people are working on the same document. If you and your lab partner are editing a document at the same time, How can you gracefully merge the changes? What if the changes you make and the changes she makes are incompatible?","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"Software like Google Docs can address some of these issues, but incompatible changes can still occur. Imagine you're writing an essay about a dog. At the beginning of the essay, you've written","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"The quick brown fox jumped over the lazy dog","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"You and your partner are both refining this epic story at the same time, and further on you write,","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"Because of how lazy the dog was, she didn't chase the fox.","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"But your partner decided the first line needed some more detail and changes it to","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"The quick brown female fox jumped over the lazy male dog.","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"so your pronouns are out of step.","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"In writing, a mistake like this might just look silly, but in programming, it can mean your code doesn't run or generates the wrong answer.","category":"page"},{"location":"Lesson1/2_git/#git-is-a-program-for-\"distributed-version-control\"-1","page":"Using the Terminal","title":"git is a program for \"distributed version control\"","text":"","category":"section"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"git is a distributed version control system (DVCS). That is, it helps one keep track of their code (version control system), and the information about versions is distributed among many systems.","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"Early version control systems were centralized - there was a single server that kept track of all of the information about a code repository. Users could \"checkout\" individual files to edit them, and the central repository would lock that file to prevent conflicting changes. This makes it easy to prevent conflicts, but is also a bit impractical.","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"By contrast, git is distributed - each user's system contains the entire revision history, and conflicts between are explicitly managed when two different edits to the code are brought together. Don't worry if this isn't super clear at this stage - we'll get into some practical examples in a sec.","category":"page"},{"location":"Lesson1/2_git/#Using-git-in-this-course-1","page":"Using the Terminal","title":"Using git in this course","text":"","category":"section"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"It might not be clear to you yet why using a version control system is worthwhile. If you don't trust me, the fact that almost every software company uses git (or something similar) should give you some confidence that it's important.","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"In any case, this entire course will use git and github.com (a website for managing and collaborating on git repositories). So let's work on doing that.","category":"page"},{"location":"Lesson1/2_git/#Assignment-1-1","page":"Using the Terminal","title":"Assignment 1","text":"","category":"section"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"If you haven't already, sign up for a github account at https://github.com/join","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"warning: Privacy Note\nYou do not need to use your wellesley.edu email address to create this account, but let Kevin know if you use a different address so that you get credit for your work.","category":"page"},{"location":"Lesson1/2_git/#","page":"Using the Terminal","title":"Using the Terminal","text":"If you'd like, you may sign up for a github student discount pack. This is not necessary for this course.\nAccept assignment 1 at this link","category":"page"},{"location":"Lesson1/#Getting-started-1","page":"Getting started","title":"Getting started","text":"","category":"section"},{"location":"Lesson1/#","page":"Getting started","title":"Getting started","text":"This file contains instructions for completing today's lesson. It is written in a language called \"markdown\", which allows plain text to be easily converted into nicely formatted webpages like the one you're looking at now. But we'll come back to this.","category":"page"},{"location":"Lesson1/#","page":"Getting started","title":"Getting started","text":"To complete this lesson, follow the instructions below.","category":"page"},{"location":"Lesson1/#","page":"Getting started","title":"Getting started","text":"warning: Warning\nIt is even more important than usual to read and follow instructions when it comes to computers and programming. We will be interacting with our computers using procedural language - that is, language that follows a strict set of procedures. Skipping steps or doing things out of order can lead to unexpected results.","category":"page"},{"location":"Lesson1/#","page":"Getting started","title":"Getting started","text":"Pages = [\"Lesson1/index.md\", \"Lesson1/0_windows.md\",\"Lesson1/1_terminal.md\"]\nDepth = 3","category":"page"},{"location":"Syllabus/#Syllabus-1","page":"Syllabus","title":"Syllabus","text":"","category":"section"},{"location":"Syllabus/#Course-Info-1","page":"Syllabus","title":"Course Info","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Course Code: BISC 195   Course Title: Essential Skills for Computational Biology","category":"page"},{"location":"Syllabus/#Instructor-1","page":"Syllabus","title":"Instructor","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Instructor: Kevin Bonham, PhD email: kbonham@wellesley.edu Github: kescobo Office Hours: TBD","category":"page"},{"location":"Syllabus/#Course-Run-Info-1","page":"Syllabus","title":"Course Run Info","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"TBD <!– TODO: add class schedule etc –>","category":"page"},{"location":"Syllabus/#Description-1","page":"Syllabus","title":"Description","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Modern biology depends on computing. At the same time, many biologists are intimidated by the prospect of programming. In an era of high-throughput assays and datasets with thousands of samples containing millions of molecular sequences, a basic knowledge of computational methods is critical. Many tools for analyzing vast quantities of molecular data have only command-line interfaces, and performing statistical tests or plotting these large datasets is impossible with excel or other software with a graphical user interface. This course will provide an introduction to essential computational techniques for biological data analysis using a modern programming language, focusing on strategies for solving problems rather than specific syntax.","category":"page"},{"location":"Syllabus/#Learning-Objectives-1","page":"Syllabus","title":"Learning Objectives","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"After completing this course, students will be able to:","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Navigate their computer and manipulate files using a command line interface.\nWrite a script to perform statistical analyses on and plot a large numerical dataset.\nFind, download, and process large biological sequence datasets from an online source.s\nSearch for a solution to a novel error or software bug and implement it in code.\nUse a version control system to keep track of changes to their code.","category":"page"},{"location":"Syllabus/#Prerequisites-1","page":"Syllabus","title":"Prerequisites","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"This course is an introduction to programming, but examples will be rooted in molecular and evolutionary biology problems. Students without prior coursework in biology should be able to succeed with additional effort.","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Recommended: Molecular and/or Cell Biology.","category":"page"},{"location":"Syllabus/#Course-Materials-1","page":"Syllabus","title":"Course Materials","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Online textbook (free)","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Think Julia: How to think like a computer scientist","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Lessons and code repositories <!– TODO: Add link –>","category":"page"},{"location":"Syllabus/#Course-Schedule-1","page":"Syllabus","title":"Course Schedule","text":"","category":"section"},{"location":"Syllabus/#Week-1-1","page":"Syllabus","title":"Week 1","text":"","category":"section"},{"location":"Syllabus/#Lesson-1:-Getting-Started-1","page":"Syllabus","title":"Lesson 1: Getting Started","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Lesson repository","category":"page"},{"location":"Syllabus/#Learning-Objectives-2","page":"Syllabus","title":"Learning Objectives","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Concepts - After completing this lesson, students will be able to:","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Compare and contrast computer code meaning and syntax\nIdentify common \"algorithms\" used in their daily lives","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Skills - After completing this lesson, students will be able to:","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Navigate their computer's file system using a command line interface\nUse a plain text editor (Atom) to modify source code\nInstall command line software using homebrew\nClone, commit to, and push from a git repository","category":"page"},{"location":"Syllabus/#Lesson-2:-Types-of-data,-operations-on-data-1","page":"Syllabus","title":"Lesson 2: Types of data, operations on data","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Lesson repository","category":"page"},{"location":"Syllabus/#Learning-Objectives-3","page":"Syllabus","title":"Learning Objectives","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Concepts - After completing this lesson, students will be able to:","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Distinguish between variables and function arguments\nIdentify functions that operate on or modify data\nCompare and contrast common scalar and container data types\nRecognize errors resulting from using functions on datatypes that do not have appropriate methods","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Skills - After completing this lesson, students will be able to:","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Execute functions on different types of arguments in a Jupyter notebook and in the REPL\nUse print statements and type introspection methods to investigate a data type\nAssign, modify and copy variables","category":"page"},{"location":"Syllabus/#Lesson-3:-\"Hello,-World!\"-Writing-your-first-program-1","page":"Syllabus","title":"Lesson 3: \"Hello, World!\" Writing your first program","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Lesson repository","category":"page"},{"location":"Syllabus/#Learning-Objectives-4","page":"Syllabus","title":"Learning Objectives","text":"","category":"section"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Concepts - After completing this lesson, students will be able to:","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"Skills - After completing this lesson, students will be able to:","category":"page"},{"location":"Syllabus/#","page":"Syllabus","title":"Syllabus","text":"","category":"page"},{"location":"Lesson1/1_terminal/#Part-1-Navigating-the-filesystem-using-the-terminal-1","page":"Using the Terminal","title":"Part 1 - Navigating the filesystem using the terminal","text":"","category":"section"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"You are probably already familiar with your computer's filesystem[fs]. If you've ever looked at files on your Desktop, or opened Finder/Explorer and navigated to your Documents folder, you've been using the file system. Data is stored on your hardrive as a continuous binary sequence (just 1s and 0s) and without a filesystem, it would be impossible to find anything!","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"Finder/Explorer are software programs used to interact with your filesystem. The filesystem contains a mix of files, which are blobs of information (eg. a .docx file containing a MS Word doc) and folders, which can contain files as well as other folders. Just to be confusing, what we colloquially call folders are technically called \"directories.\" I will use the terms interchangably.","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"(Image: File system hierarchy)","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"You may not have thought much about how the filesystem is organized, but you probably have an intuitive sense of how this works. Your home[home] directory contains the Desktop and Documents folders, each of which might contain many other subfolders and/or files, and each subfolder may have yet more subfolders and files and so on.","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"Finder/Explorer are examples of a graphical user interface (GUI - pronounced \"gooey\"), that is a program that allows you to interact with it visually. However, GUIs are difficult to design and maintain, so most bioinformatics tools are built around command line[cl] or text-based interfaces. The good news is that the organization of the filesystem is the same whether you're interacting with it in a GUI or in the terminal. And once you learn how to use the command line interface, you'll see that it is a powerful way to get a lot done quickly.","category":"page"},{"location":"Lesson1/1_terminal/#.1:-Open-the-terminal-application-1","page":"Using the Terminal","title":"1.1: Open the terminal application","text":"","category":"section"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"Mac Users:  ","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"Open Applications\nClick Open the Terminal application","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"Windows Users:  ","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"Click Start -> Programs\nOpen Windows Subsystem for Linux","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"You will be greated with a white or black box that contains some text, and a cursor next to the dollar symbol $. This is the command prompt.","category":"page"},{"location":"Lesson1/1_terminal/#.2-Walk-around-your-file-system-1","page":"Using the Terminal","title":"1.2 Walk around your file system","text":"","category":"section"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"Think of your filesystem as a branching network of roads that you can walk along. Each directory is a location that has a path back to its parent directory, may or may not contain objects (files), and may have one or many roads leading to new locations (subdirectories).","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"Your present location, referred to as the working directory[wd], is your home folder when you first open the terminal. Let's see where that is. In your terminal, type pwd and press enter.","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"$ pwd","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"/Users/kevin","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"This is the \"print working directory\" command.","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"tip: Tip\nWhenever you see code blocks in these lessons that start with $, this is a hint that it is a shell command. When copying or typing these commands, do not include the $. For example, to complete the task above, you should only type pwd, then press enter.$ is referred to as the \"prompt\" or \"command prompt.\" When you enter a command, you may or may not see some output (which will not be preceeded by $) and once the command has finished executing, you will see a new prompt.","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"The filesystem is organized hierarchically - At the very top of the hierarchy is the root[root], which you can think of as a folder that contains all other files and folders. On a Mac (and other Unix systems), the root is referred to with a single forward slash (/), While on Windows machines, the root is probably C:\\.","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"note: Windows Users\nWhen you open Windows Subsystem for Linux, you're actually running a fully functional OS with its own file system. As a result, when you type pwd in the terminal, you will likely see something like /home/yourname, rather than seeing your main OS home folder.But WSL has access to your files in a special path, /mnt/c/. If you want to see the files in your Documents folder for example, look in /mnt/c/Users/yourname/Documents.","category":"page"},{"location":"Lesson1/1_terminal/#Moving-around-1","page":"Using the Terminal","title":"Moving around","text":"","category":"section"},{"location":"Lesson1/1_terminal/#Key-Terms-1","page":"Using the Terminal","title":"Key Terms","text":"","category":"section"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"[fs]: Filesystem: a hierarchical organization of files and folders. Additional reading","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"[root]: root: the top of the filesystem hierarchy. A folder that contains all other files and folders.","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"[home]: home: a user's primary folder containing Desktop, Documents, and other user-specific folders and files.","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"[cl]: command line: a text-based interface for interacting with your computer. Also referred to as \"terminal\" or \"shell.\"","category":"page"},{"location":"Lesson1/1_terminal/#","page":"Using the Terminal","title":"Using the Terminal","text":"[wd]: working directory:","category":"page"},{"location":"#Essential-Skills-for-Computational-Biology-1","page":"Home","title":"Essential Skills for Computational Biology","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\"index.md\", \"Syllabus.md\", \"Lesson1/index.md\"]\nDepth = 2","category":"page"}]
}
