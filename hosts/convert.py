import os
os.remove("rpz.blacklist")

inputFile = "gravity.list"
outputFile = "rpz.blacklist"

with open(inputFile, 'r') as f: # load file
    lines = f.read().splitlines()  # read lines

with open(outputFile, 'w') as f: 
    f.write('\n'.join([line + '  CNAME .' for line in lines]))

# stringToAPpend = "CNAME . "
# with open(inputFile, 'r') as inFile, open(outputFile, 'w') as outFile:
#     for line in inFile:
#         outFile.write(stringToAPpend+line)