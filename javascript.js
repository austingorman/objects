
const congressionalCandidate = {
    district: 5,
    platform: [
        {
            taxes:'More taxes for the rich',
            jobs:'Better jobs',
            infrastructure:'We need improved roads and public transport' ,
            healthCare:'Universal healthcare',
            crime:'Crime is really bad',
        }
    ],
    donationUrl:'http://www.givememoney.biz',
    calandar:'We got a lotta stuff going on!',
    volumteerInfo: [
        {
            name:'Hugo Milton',
            address:'190 Dog Street',
            email:'dog@bone.com',
            phone:'555-5555',
            availability:'All day',
            activities:'Passing out fliers',
        }
    ],
    biography:'Elizabeth is a champion for the people etc',
    images: [
        {
            headShot:'headshot.jpg',
            family:'family.jpg',
            constituents:'constituents.jpg',
        }
    ],
    missionStatement:'Vote for me for you',
    voteUrl:'http://www.vote.biz',
}


function district(number) {
    congressionalCandidate.district = number;
}
district(3)
// console.log(congressionalCandidate.district)
function platform(taxes, jobs, infrastructure, healthCare, crime) {
    congressionalCandidate.platform[0].taxes = taxes
    congressionalCandidate.platform[0].jobs = jobs
    congressionalCandidate.platform[0].infrastructure = infrastructure
    congressionalCandidate.platform[0].healthCare = healthCare
    congressionalCandidate.platform[0].crime = crime
}
platform('bad', 'fewer jobs', 'no cars allowed', 'live forever', 'crime is fine')
// console.log(congressionalCandidate.platform[0].taxes)
function donationUrl(url) {
    congressionalCandidate.donationUrl = url
}
donationUrl('http://www.money.com')
// console.log(congressionalCandidate.donationUrl)
function calandar(cal) {
    congressionalCandidate.calandar = cal
}
calandar('empty calandar')
// console.log(congressionalCandidate.calandar

function volunteer(name, address, email, phone, availability, activities) {
    congressionalCandidate.volumteerInfo[0].name = name
    congressionalCandidate.volumteerInfo[0].address = address
    congressionalCandidate.volumteerInfo[0].email = email
    congressionalCandidate.volumteerInfo[0].phone = phone
    congressionalCandidate.volumteerInfo[0].availability = availability
    congressionalCandidate.volumteerInfo[0].activities = activities
}
volunteer('Harvey', '200 house ave', 'thing@email.com', '388-3933', 'never', 'phone calling')

function biography(bio) {
    congressionalCandidate.biography = bio
}
biography('I so fly ya know')

function images(headShot, family, constituents) {
    congressionalCandidate.images[0].headShot = headShot
    congressionalCandidate.images[0].family = family
    congressionalCandidate.images[0].constituents = constituents
}
images('face.jpg', 'fam.png', 'coolconstituents.jpg')

function missionStatement(statement) {
    congressionalCandidate.missionStatement = statement
}
missionStatement('Gimme that vote')

function url(newUrl) {
    congressionalCandidate.url = newUrl
}
url('http://www.alright.com')

let article = document.createElement('article')
article.id = congressionalCandidate.district
let textNode1 = document.createTextNode(`Taxes: ${congressionalCandidate.platform[0].taxes}`)
let textNode2 = document.createTextNode(`Jobs: ${congressionalCandidate.platform[0].jobs}`)
let textNode3 = document.createTextNode(`Infrastructure: ${congressionalCandidate.platform[0].infrastructure}`)
let textNode4 = document.createTextNode(`Healthcare: ${congressionalCandidate.platform[0].healthCare}`)
let textNode5 = document.createTextNode(`Crime: ${congressionalCandidate.platform[0].crime}`)
let platformList = document.createElement('ul')
let list1 = document.createElement('li')
let list2 = document.createElement('li')
let list3 = document.createElement('li')
let list4 = document.createElement('li')
let list5 = document.createElement('li')
list1.appendChild(textNode1)
list2.appendChild(textNode2)
list3.appendChild(textNode3)
list4.appendChild(textNode4)
list5.appendChild(textNode5)
platformList.appendChild(list1)
platformList.appendChild(list2)
platformList.appendChild(list3)
platformList.appendChild(list4)
platformList.appendChild(list5)
article.appendChild(platformList)
document.body.appendChild(article)