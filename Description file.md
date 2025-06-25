### **frequent git commands**

* git clone link
* git remote add origin link
* git add .
* git commit -m "your commit message"
* git branch new-branch-name
* git switch branch-name
* git switch main
* git merge branch-name
* git branch -d main
* git push origin brach-name
* git push -u origin branch-name
* git push
* git pull origin branch-name
* git pull
* git status
* git log
* git branch -m new-name
* git remote -v
* git restore filename # Undo local changes (unstaged)
* git reset HEAD filename # Unstage file
* git reset --hard # Discard all local changes (DANGEROUS)

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