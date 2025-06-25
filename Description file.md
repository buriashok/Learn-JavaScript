clone a repository
git clone link

Add file to stagging

#Add specific file
git add filename

#Add all changed files in current directory
git add .


Commit staged files
git commit -m "your commit message"

Create a new branch
git branch new-branch-name

switch to another branch
git switch branch-name

create and switch to new branch
git switch -c new-branch-name

merge changes to main branch
git switch main
git merge branch-name

delete a branch
#deletes local branch (if merged)
git branch -d main
#Force delete local branch
git branch -D main

push changes to remote repository
#push current branch
git push origin brach-name
First time push for a new branch:
git push -u origin branch-name # Set upstream tracking branch
Pull latest changes from remote
git pull origin branch-name
See current status
git status
See commit history
git log
Rename a branch
git branch -m new-name
Check remotes
git remote -v
Add a new remote (if needed)
git remote add origin https://github.com/user/repo.git
Undo changes (careful!)
git restore filename # Undo local changes (unstaged)
git reset HEAD filename # Unstage file
git reset --hard # Discard all local changes (DANGEROUS)

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