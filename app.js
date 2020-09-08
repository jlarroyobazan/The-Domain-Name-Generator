const pronoun = ['the','our'];
const adjetive = ['great', 'big', 'perfect'];
const noun = ['jogger','racoon'];
const domain = ['es', 'com', 'net', 'us', 'io'];
const separator = '.';

generateDomain();

function  generateDomain() {

    for (let index = 0; index < pronoun.length; index++) {
        const currentPronoun = pronoun[index];

        for (let j = 0; j < adjetive.length; j++) {
            const currentAdjetive = adjetive[j];

            for (let k = 0; k < noun.length; k++) {
                const currentNoun = noun[k];

                for (let length = 0; length < domain.length; length++) {
                    const currentDomain = domain[length];

                    if (currentNoun == currentDomain) {
                        console.log(currentPronoun + currentAdjetive + separator + currentDomain);                         
                    } else {                        
                        console.log(currentPronoun + currentAdjetive + currentNoun + separator + currentDomain); 
                    }
                }
            }
        }
    }
}