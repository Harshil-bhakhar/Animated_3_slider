
let j, selElmnt, a, b, c;

/*look for any elements with the class "custom-select":*/
const x = document.getElementsByClassName( "custom-select" );
for ( let element = 0; element < x.length; element++ ) {
  selElmnt = x[ element ].getElementsByTagName( "select" )[ 0 ];

  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement( "DIV" );
  a.setAttribute( "class", "select-selected" );
  a.innerHTML = selElmnt.options[ selElmnt.selectedIndex ].innerHTML;
  x[ element ].appendChild( a );

  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement( "DIV" );
  b.setAttribute( "class", "select-items select-hide" );
  selElmnt.options[ 0 ].classList.add( "same-as-selected" );
  for ( j = 0; j < selElmnt.length; j++ ) {

    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    // loop through <select> attributes and apply them on <div>
    c = document.createElement( "DIV" );
    const attributes = selElmnt.options[ j ].attributes;
    for ( let k = 0; k < attributes.length; k++ ) {
      c.setAttribute( attributes[ k ].name, attributes[ k ].value );
    }
    c.innerHTML = selElmnt.options[ j ].innerHTML;
    c.addEventListener( "click", function() {

      /*when an item is clicked, update the original select box,
        and the selected item:*/
      let y, item, k;
      const s = this.parentNode.parentNode.getElementsByTagName( "select" )[ 0 ];
      const h = this.parentNode.previousSibling;
      for ( item = 0; item < s.length; item++ ) {
        if ( s.options[ item ].innerHTML === this.innerHTML ) {
          s.selectedIndex = item;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName( "same-as-selected" );
          for ( k = 0; k < y.length; k++ ) {
            y[ k ].removeAttribute( "class" );
          }
          this.classList.add( "same-as-selected" );
          break;
        }
      }
      h.click();
    } );
    b.appendChild( c );
  }
  x[ element ].appendChild( b );
  a.addEventListener( "click", function( e ) {

    /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect( this );
    this.nextSibling.classList.toggle( "select-hide" );
    this.classList.toggle( "select-arrow-active" );
  } );
}
function closeAllSelect( elmnt ) {

  /*a function that will close all select boxes in the document,
  except the current select box:*/
  const arrNo = [];
  const x = document.getElementsByClassName( "select-items" );
  const y = document.getElementsByClassName( "select-selected" );
  for ( let index = 0; index < y.length; index++ ) {
    if ( elmnt === y[ index ] ) {
      arrNo.push( index );
    } else {
      y[ index ].classList.remove( "select-arrow-active" );
    }
  }
  for ( let j = 0; j < x.length; j++ ) {
    if ( arrNo.indexOf( j ) ) {
      x[ j ].classList.add( "select-hide" );
    }
  }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener( "click", closeAllSelect );
