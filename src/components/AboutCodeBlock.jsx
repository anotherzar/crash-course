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
    <div className='font-mono w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-x-auto rounded-xl bg-zinc-900 border border-zinc-600 p-4 shadow-md'>
        {fileName}
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {jsSyntax}
      </SyntaxHighlighter>
    </div>
  );
};

export default AboutCodeBlock;
