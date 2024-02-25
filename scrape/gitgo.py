import subprocess
import sys

# Check if the correct number of command-line arguments is provided
if len(sys.argv) != 3:
    print("Error: Invalid number of arguments")
    sys.exit(1)

commitMSg = sys.argv[1]
originBranch = sys.argv[2]

print("Commit message: " + commitMSg)
print("Origin branch: " + originBranch)

# freeze dependencies
resultFreeze = subprocess.run("pip freeze > requirements.txt", shell=True)

if resultFreeze.returncode != 0:
    print("Error: Failed to freeze dependencies")
    sys.exit(1)
print("EXE_Message: Dependencies frozen")


resultAdd = subprocess.run("git add .", shell=True)

if resultAdd.returncode != 0:
    print("Error: Failed to add files")
    sys.exit(1)
print("EXE_Message: Files added")

resultCommit = subprocess.run("git commit -m \"" + commitMSg + "\"", shell=True)

if resultCommit.returncode != 0:
    print("Error: Failed to commit")
    sys.exit(1)
print("EXE_Message: Files committed")

resultPush = subprocess.run("git push origin " + originBranch, shell=True)  

if resultPush.returncode != 0:
    print("Error: Failed to push")
    sys.exit(1)
print("EXE_Message: Files pushed")
print("Success: Full Script Executed")