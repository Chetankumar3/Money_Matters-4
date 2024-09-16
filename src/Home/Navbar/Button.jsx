// import React from 'react'

// function Button({text,url}) {
//   return (
//     <a className='Link' href={url}>
//       <button>{text}</button>
//     </a>
//   );
// }

// export default Button

import React from 'react'

function Button({text,url,onclick}) {
  return (
    <a className='Link' href={url}>
      <button onClick={onclick}>{text}</button>
    </a>
  );
}

export default Button