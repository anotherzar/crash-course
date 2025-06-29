import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { div, i } from 'motion/react-client';

const jsSyntax = `export const aboutMe = {
  name: 'Zar',
  age: 19,
  role: 'Motion & VFX',
  education: 'Informatics Student',
  location: 'Jakarta, ID',
  avability: 'Freelance',
  hobby: 'Listening to Spotify',
};
`;

const fileName = 'aboutMe.js'

const AboutCodeBlock = () => {
  return (
    <div className='font-mono'>
        {fileName}
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {jsSyntax}
      </SyntaxHighlighter>
    </div>
  );
};

export default AboutCodeBlock;
