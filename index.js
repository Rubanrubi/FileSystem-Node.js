const fs = require('fs')

fs.writeFileSync('ruban.txt', 'My Name is Ruban')

//Here I gona Append a Data Next to we already done

fs.appendFileSync('ruban.txt', ' I am a Backend Developer')