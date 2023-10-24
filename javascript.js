//flages // les drapeaux


//   const pattern = /hello/;

//   console.log(pattern.test("Hello, World!")); // true


    
//  const pattern = /apples/g;
    
//      const text = "apples are delicious, apples are nutritious.";
//      const matches = text.match(pattern);
//      if(matches === null){
//         console.log('pas exist')
//      }else console.log(matches.length);
     


      // ["apples", "apples"]

    //    const pattern = /^a/gm;
    //    const text = "apple. \napples are delicious.\napple pie";
    //    const matches = text.match(pattern);
    //    console.log(matches); // ["apple", "apple"]

//        const pattern = /a.bc/s;
//    console.log(pattern.test("a bc")); // true


  

//  const pattern = /apple/g;
//  const text = "Apples are delicious. APPLE pie is great, je mange apple.";
//  const matches = text.match(pattern);
//  console.log(matches); // ["Apples", "APPLE"]

// patterns//patterns//patterns//patterns


//  const pattern = /pommes/;
//  const text = "J'aime les pommes.";
//  console.log(pattern.test(text)); // true



//    const pattern = /^[a-zA-Z0-9._-]+@gmail+\.[a-zA-Z]{2,4}$/;

//     const email = "contact@gmail.com";

//    console.log(pattern.test(email)); // true


//  const pattern = /\+212\-+[6|7]+\d{8}/g;
//  const text = "Mon numéro de téléphone est +212-766153414, et le numéro de quelqu'un d'autre est  +212-661872687.";
//  const matches = text.match(pattern);
//  console.log(matches); // ["123-456-7890", "987-654-3210"]

// const pattern = /^\d{4}-\d{2}-\d{2}$/;
// const date = "2023-10-17";
// console.log(pattern.test(date)); // true

//  const pattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
//  const cardNumber = "4111111111111";
//  console.log(pattern.test(cardNumber)); // true

// const pattern = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;
// const text = "Les adresses IP valides sont 192.168.1.1 et 10.0.0.1.";
// const matches = text.match(pattern);
// console.log(matches); // ["192.168.1.1", "10.0.0.1"]

// const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// const password = "P@ssw0rd";
// console.log(pattern.test(password)); // true










//les methodes // les methodes du regular expression



//  const pattern = /abc/;

//  const text = "abc";

//  const isMatch = text.match(pattern); 
// // true


//  console.log(isMatch);



// const pattern = /a/g; // Le drapeau "g" est important pour trouver toutes les occurrences
// const text = "- Définir les méthodes utilisées pour RegEx en js (test, match, search ..abracadabra";
// const matches = text.match(pattern); // ["a", "a", "a", "a"]
// console.log(matches);



//   const pattern = /bc/;

//   const text = "abcdefj";

//   const position = text.search(pattern); 
//  //0

//   console.log(position);




 const pattern = /Hello/;

 const text = "Hello, world!";

 const newText = text.replace(pattern, "universe"); 
 //"Hello, universe!"


 console.log(newText);


// const pattern = /,/;
 // const text = "apple,banana,kiwi";
// const parts = text.split(pattern); // ["apple", "banana", "kiwi"]
 // console.log(parts)