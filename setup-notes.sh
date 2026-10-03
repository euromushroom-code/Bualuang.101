# Install nvm and Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 24
node -v
npm -v

# Create the project folder
mkdir BUALUANG-101
cd BUALUANG-101

# copy your code files into this folder, then:
printf "node_modules/\n.env\n" > .gitignore

# Upload to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/euromushroom-code/BUALUANG-101.git
git push -u origin main

