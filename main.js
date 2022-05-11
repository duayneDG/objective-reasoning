// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

/*
## 1. `isAdmin`

Write a function, `isAdmin` that takes in a user object and returns true if the user is an admin,
as indicated by their `userRole` key. All admins' `userRole` attributes are equal to `'ADMIN'`.

A user object will look like this:
```
{
    firstName: String,
    lastname: String,
    userRole: String
}
``` 
*/

function isAdmin(userObj){
    let adminRole = userObj.userRole;

    if(adminRole === 'ADMIN'){
        return true
    }else{
        return false
    }
};

/*
## 2. `getEmail`

Write a function, `getEmail`, that given a user object, return the users' Code Immersives email. We'll assume that
a Code Immersives email is always in `firstName.lastName@codeimmersives.com` form.

**Examples**
```
getEmail({
    firstName: 'Brian'
    lastName: 'Carela'
})

 */
function getEmail(userObj){

    const firstName = userObj.firstName;
    const lastName = userObj.lastName;
    let emailAddress = `${firstName}.${lastName}@codeimmersives.com`.toLocaleLowerCase()
    return emailAddress
}
// console.log(getEmail({
//     firstName: 'Brian',
//     lastName: 'Carela'
// }))

/*
## 3. `getPlaylistLength`

Write a function, `getPlaylistLength` that takes in a playlist and returns the number of songs in the playlist

A playlist object will look like this:
```
{
    name: 'my jams',
    songs: ['Vienna', 'Hey Ya!']
}
```
 */

function getPlaylistLength(userObj){
    let song = userObj.songs;
    playList = song.length
    return playList
}
// console.log(getPlaylistLength({
//     name: 'playlist 1',
//     songs: ['song1', 'song2', 'song3']
// }))

/*
## 4. `getHardestHomework`

Write a function, `getHardestHomework` that takes in an array of homework objects and returns the name of 
the hardest homework assignment. The hardest homework will be the one that has the lowest average score. If the array contains no homeworks, return an empty string.

*/

function getHardestHomework(userObjArray){
    if (userObjArray.length < 1){
        return ""
    }else{
   
    let  average = userObjArray[0].averageScore
    let assignmentIndex = 0;

    for(let i=0; i < userObjArray.length; i++){
        const userScore = userObjArray[i].averageScore;
        
        if(userScore < average){
            average = userScore; 
            assignmentIndex += 1
        }else{
            average = average;
            assignmentIndex = assignmentIndex;
        };
    }
        return userObjArray[assignmentIndex].name
    }
}

// console.log(getHardestHomework([
//     { name: 'some hw', averageScore: 55 },
//     { name: 'other hw', averageScore: 20 },
//     { name: 'third hw', averageScore: 99 }
// ]))

/*
## 5. `createPhonebook`

Write a function, `createPhonebook`, that creates a phonebook object from an array of names
and phone numbers.

example
createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766'])
=> {
    'Jimothy': '123-456-7890',
    'Maria': '000-000-0000',
    'Karl': '999-888-7766'
}
 */
function createPhonebook(name, phoneNumber){
    let phoneBook = []

  
        for(let i = 0; i < phoneNumber.length; i++){

            let entryObject = JSON.stringify(phoneNumber)

            let contactEntry = {
                name: `${name}`,
                phoneNumber :`${phoneNumber}`,
                bookEntry : name[i] + ': '+ phoneNumber[i]
                };

            const myJSON = `{'name': ${name},'name': ${name} }`
                let entry = Object.create(contactEntry)
                entry.name = name;
                entry.phoneNumber = phoneNumber;
                entry.bookEntry = name[i] + ': '+ phoneNumber[i]

                phoneBook.push(entry.bookEntry)
        }
         return phoneBook
}

   
    
console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']))







// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};