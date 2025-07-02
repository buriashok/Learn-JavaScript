## Mern Stack Notes
1. [Huxn-Web-Dev](https://www.youtube.com/@huxnwebdev)
2. [zero to hero complete full stack](https://youtu.be/H3XIJYEPdus?si=mai3xjA3i6lEeGRX)
3. clg --> ```console.log();```
4. log --> ```console.log();```
5. variables --> variables are used to store data values
6. In javaScript you can declare in three ways var, let, and const.
7. var (old) --> 1. Function-scoped 2. can be re-declared and updated.
8. let(modern) --> 1.Block-scoped 2. Can be updated, but not re-declared in the same scope
### Primitive Data Types
1. Number


typeof --> tells the type of the data type 

#### falsy values
1. false
2. null
3. undefined
4. 0
5. -0
6. NaN
7. '',"",``,(empty quotes)
---
- null vs undefined
1. history -c  ==> to delete current session terminal history.
2. 



Complete notes
What is Upstream in Git (GitHub)?
In short:
Upstream refers to the remote repository (often on GitHub) that your local branch is tracking changes from or pushing
changes to.

Local vs Remote Branches
Local branch: The branch on your computer (e.g., main, dev)

Remote branch: The version of that branch on GitHub (e.g., origin/main)

"Upstream" in context
When you set an upstream, you're telling Git:

"Hey, for this local branch, this is the branch on GitHub I want to track, pull from, and push to."
You create a new branch and push it:
git push -u origin new-feature
git push # No need to type the branch name
git pull # It knows where to pull from

To see current upstream settings:
git branch -vv
To change/set upstream manually:
git branch --set-upstream-to=origin/branch-name

echo "# Mern-stack-pratice-project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/buriashok/Mern-stack-pratice-project.git
git push -u origin main

git remote add origin https://github.com/buriashok/Mern-stack-pratice-project.git
git branch -M main
git push -u origin main