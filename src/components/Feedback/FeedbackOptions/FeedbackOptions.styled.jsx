import styled from 'styled-components';

export const Button = styled.button `
     display: inline-block;
     margin: 0 auto;
     padding: 5px 10px;
     width: 120px;
     border: none;
     cursor: pointer;
     box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
     background-color: white;
     transition: scale 200ms ease;
     :not(:last-child) {
          margin-right: 20px;
     }
     :hover {
          background-color: green;
          scale: 1.2;
     }

     :first-letter {
          text-transform: uppercase;
     }
`;