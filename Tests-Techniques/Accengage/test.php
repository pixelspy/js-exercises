<?php

/**
 * Returns ordered given $array ascending or descending
 *
 * @param $array
 * @param string $ascOrDesc
 * @return mixed
 */

 $array = [10, 8, 9, 11, 63, 3];


  function order($array, $ascOrDesc) {
      if ($ascOrDesc === 'asc') {
          sort($array);
      } else if ($ascOrDesc === 'desc') {
          rsort($array);
      }

      $arrlength = count($array);
      for($x = 0; $x < $arrlength; $x++) {
          echo $array[$x];
          echo ", ";
      }
      return $array;
  }
var_dump(order($array, 'desc'));
var_dump(order($array, 'asc'));

/**
 * Returns odd or even number from given $array
 *
 * @param $array
 * @param string $oddOrEven
 * @return mixed
 */

$array = array(4, 3, 6, 5, 8, 7, 2);


function oddOrEven($array, $oddOrEven) {
    if ($oddOrEven === 'even') {
      // function to filter even elements
        function evenComparator($array)
        {
            return !($array & 1);
        }
        // filter even elements
        $array = array_filter($array, "evenComparator");
    } else if ($oddOrEven === 'odd') {
        // function to filter odd elements
        function oddComparator($array)
        {
            return ($array & 1);
        }
        // filter odd elements
        $array = array_filter($array, "oddComparator");
    };
   return $array;
}

var_dump(oddOrEven($array, 'even'));
var_dump(oddOrEven($array, 'odd'));


//////////////////////////////////////////////////////////////

// Exemple dINSERT de données :
// dans la table authors
INSERT INTO `authors` (`id`, `firstname`, `lastname`) VALUES (NULL, 'Maya', 'Angelou'), (NULL, 'Toni', 'Morrison');
// dans la rable books
INSERT INTO `books` (`id`, `title`, `authorId`) VALUES (NULL, 'Are prisons Obsolete?', '1');

SELECT authors.firstname, authors.lastname, COUNT(authorId) AS numberOfBooks FROM books INNER JOIN authors WHERE authors.id=books.authorId AND authorId=1


////////////////////////////////////////////////////////////////

const array = [1, 2, 3];
let total = 0;
let newArray = [];
array.forEach((number) => {
  newArray.push(number+total);
  total += number;
});
console.log(newArray);


/////////////////////////////////////////////////////////////
// Write a regexp that allow capturing all the line finishing by a . or a -
