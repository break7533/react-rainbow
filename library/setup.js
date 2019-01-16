import GlobalHeader from './../library/exampleComponents/GlobalHeader';
import CodeEditor from './pages/components/CodeEditor';
import FeatureList from './pages/components/FeatureList';
import ExperienceExamplesPage from './pages/ExperienceExamplesPage';
import GettingStartedPage from './pages/GettingStartedPage';
import Designs from './pages/Designs';
import RainbowComponents from './pages/Designs/RainbowComponents';
import Administration from './pages/Designs/Administration';
import Authentication from './pages/Designs/Authentication';
import Chat from './pages/Designs/Chat';

global.GlobalHeader = GlobalHeader;
global.CodeEditor = CodeEditor;
global.FeatureList = FeatureList;
global.ExperienceExamplesPage = ExperienceExamplesPage;
global.GettingStartedPage = GettingStartedPage;
global.Designs = Designs;
global.RainbowComponents = RainbowComponents;
global.Administration = Administration;
global.Authentication = Authentication;
global.Chat = Chat;
global.LIBRARY_GOOGLE_MAPS_APIKEY = process.env.REACT_APP_GOOGLE_MAPS_APIKEY;
global.LIBRARY_RECAPTCHA_APIKEY = process.env.REACT_APP_RECAPTCHA_APIKEY;
