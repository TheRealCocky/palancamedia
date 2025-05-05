import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

const NewsRandom =lazy(()=>import( "./components/NewsRandom"));
const NewsJC =lazy(()=>import( "./components/NewsJC"));

{/*Components DOCS de cursos renderizados*/}
const DocsPetroleo =lazy(()=>import( "./components/DocsPetroleo"));
const DocsBioMedica =lazy(()=>import( "./components/DocsBioMedica"));
const DocsAero = lazy(()=>import("./components/DocsAero"));
const DocsAmbiental =lazy(()=>import( "./components/DocsAmbiental"));
const DocsProducao =lazy(()=>import( "./components/DocsProducao"));
const  DocsQuimica =lazy(()=>import( "./components/DocsQuimica"));
const DocsMecanica =lazy(()=>import( "./components/DocsMecanica.jsx"));
const DocsEletrica =lazy(()=>import( "./components/DocsEletrica.jsx"));
const DocsCivil =lazy(()=>import( "./components/DocsCivil"));

{/*Components Slides de cursos renderizados*/}
const SlidesEletica = lazy(()=>import( "./components/SlidesEletrica"));
const SlidesBiomedico =lazy(()=>import("./components/SlidesBiomedico"));
const SlidesAero =lazy(()=>import("./components/SlidesAero"));
const SlidesAmbiental =lazy(()=>import( "./components/SlidesAmbiental"));
const SlidesProducao =lazy(()=>import( "./components/SlidesProducao"));
const SlidesQuimica =lazy(()=>import( "./components/SlidesQuimica"));
const SlidesMecanica =lazy(()=>import( "./components/SlidesMecanica"));
const SlidesCivil =lazy(()=>import( "./components/SlidesCivil"));

{/*Components PDFS de cursos renderizados*/}
const PDFsEletrica =lazy(()=>import( "./components/PDFsEletrica"));
const PDFsBiomedico =lazy(()=>import( "./components/PDFsBiomedico"));
const PDFsAero =lazy(()=>import( "./components/PDFsAero"));
const PDFsAmbiental =lazy(()=>import( "./components/PDFsAmbiental"));
const PDFsProducao =lazy(()=>import( "./components/PDFsProducao"));
const PDFsPetroleo =lazy(()=>import( "./components/PDFsPetroleo"));
const PDFsQumica =lazy(()=>import( "./components/PDFsQuimica"));
const PDFsMecanica =lazy(()=>import( "./components/PDFsMecanica"));
const PDFSCivil =lazy(()=>import("./components/PDFSCivil"));

{/*Components Livros de cursos renderizados*/}
const LivrosEletrica =lazy(()=>import( "./components/LivrosEletrica"));
const LivrosBiomedica =lazy(()=>import( "./components/LivrosBiomedica"));
const LivrosAero =lazy(()=>import( "./components/LivrosAreo"));
const LivrosAmbiental =lazy(()=>import( "./components/LivrosAmbiental"));
const LivrosProducao =lazy(()=>import( "./components/LivrosProducao"));
const LivrosPetroleo =lazy(()=>import( "./components/LivrosPetroleo"));
const LivrosQuimica =lazy(()=>import( "./components/LivrosQuimica"));
const LivrosMecanica =lazy(()=>import( "./components/LivrosMecanica"));
const LivrosCivil =lazy(()=>import( "./components/LivrosCivil"));

{/*Components audios de cursos renderizados*/}
const AudiosBiomedico =lazy(()=>import( "./components/AudiosBiomedico"));
const  AudiosAero =lazy(()=>import("./components/AudiosAero"));
const AudiosAmbiental =lazy(()=>import( "./components/AudiosAmbiental"));
const AudiosEletrica =lazy(()=>import("./components/AudiosEletrica"));
const AudiosProducao =lazy(()=>import( "./components/AudiosProducao"));
const AudiosPertoleo =lazy(()=>import( "./components/AudiosPetroleo"));
const AudioMecanica =lazy(()=>import( "./components/AudioMecanica"));
const AudiosQuimica = lazy(()=>import("./components/AudiosQuimica"));
const AudioCivil =lazy(()=>import( "./components/AudioCivil"));

{/*Componentes videos renderizados*/}
const VideosBiomedica = lazy(()=>import( "./components/VideosBiomedica"));
const VideosProducao =lazy(()=>import( "./components/VideosProducao"));
const VideosAero = lazy(()=> import( "./components/VideosAero"));
const VideosEletrica =lazy(()=>import( "./components/VideosEletrica"));
const VideosAmbiental = lazy(()=>import( "./components/VideosAmbiental"));
const VideosPertoleo= lazy(()=>import( "./components/VideosPetroleo"));
const VideosMecanica =lazy(()=> import ("./components/VideosMecanica"));
const VideosQuimica =lazy(()=>import("./components/VideosQuimica"));
const VideosCivil =lazy (()=> import ('./components/VideosCivil'));
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Registo = lazy(() => import('./components/Registo'));

const FstMeeting = lazy(() => import('./components/FstMeeting'));
const Meeting = lazy(() => import('./components/Meeting'));
const FstBiblioteca = lazy(() => import('./components/FstBiblioteca'));

const Myself = lazy(() => import('./components/Myself'));
const Sobre = lazy(() => import('./components/Sobre'));
const Contacto = lazy(() => import('./components/Contacto'));
const PoliticaPrivacidade = lazy(() => import('./components/PoliticaPrivacidade'));

const Biblioteca = lazy(() => import('./components/Biblioteca'));
const BibiVideos = lazy(() => import('./components/BibiVideos'));
const Livros = lazy(() => import('./components/Livros'));
const PDFs = lazy(() => import('./components/PDFs'));
const Slides = lazy(() => import('./components/Slides'));
const Documentos = lazy(() => import('./components/Documentos'));
const AudioPage = lazy(() => import('./components/AudioPage'));

const BibliotecaAudios = lazy(() => import('./components/BibliotecaAudios'));
const BibliotecaPDFs = lazy(() => import('./components/BlibliotecaPDFs'));
const BibliotecaSlides = lazy(() => import('./components/BibliotecaSlides'));
const BibliotecaDocumentos = lazy(() => import('./components/ BibliotecaDocumentos.jsx'));
const BibliotecaLivros = lazy(() => import('./components/BibliotecaLivros'));

const News = lazy(() => import('./components/News'));
const NewsDetails = lazy(() => import('./components/NewsDetails'));

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-lg text-gray-700">Carregando…</span>
                </div>
              </div>
            }
        >
          <Routes>
            {/* Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registo" element={<Registo />} />

            {/* Privadas */}
            <Route path="/videos/eng-da-computacao" element={<PrivateRoute><Biblioteca /></PrivateRoute>} />
            <Route path="/meeting" element={<PrivateRoute><Meeting /></PrivateRoute>} />
            <Route path="/primeeting" element={<PrivateRoute><FstMeeting /></PrivateRoute>} />
            <Route path="/pribiblioteca" element={<PrivateRoute><FstBiblioteca /></PrivateRoute>} />
            <Route path="/myself" element={<PrivateRoute><Myself /></PrivateRoute>} />
            <Route path="/bibivideos" element={<PrivateRoute><BibiVideos /></PrivateRoute>} />
            <Route path="/livros" element={<PrivateRoute><Livros /></PrivateRoute>} />
            <Route path="/pdfs" element={<PrivateRoute><PDFs /></PrivateRoute>} />
            <Route path="/slides" element={<PrivateRoute><Slides /></PrivateRoute>} />
            <Route path="/documentos" element={<PrivateRoute><Documentos /></PrivateRoute>} />
            <Route path="/audio" element={<PrivateRoute><AudioPage /></PrivateRoute>} />
            <Route path="/sobre" element={<PrivateRoute><Sobre /></PrivateRoute>} />
            <Route path="/contacto" element={<PrivateRoute><Contacto /></PrivateRoute>} />
            <Route path="/politica" element={<PrivateRoute><PoliticaPrivacidade /></PrivateRoute>} />
            <Route path="/audio/eng-da-computacao" element={<PrivateRoute><BibliotecaAudios /></PrivateRoute>} />
            <Route path="/pdf/eng-da-computacao" element={<PrivateRoute><BibliotecaPDFs /></PrivateRoute>} />
            <Route path="/slides/eng-da-computacao" element={<PrivateRoute><BibliotecaSlides /></PrivateRoute>} />
            <Route path="/docs/eng-da-computacao" element={<PrivateRoute><BibliotecaDocumentos /></PrivateRoute>} />
            <Route path="/livros/eng-da-computacao" element={<PrivateRoute><BibliotecaLivros /></PrivateRoute>} />
            <Route path="/videos/eng-civil" element={<PrivateRoute><VideosCivil /></PrivateRoute>} />
              <Route path="/videos/eng-quimica" element={ <PrivateRoute><VideosQuimica/></PrivateRoute>}/>
              <Route path="/videos/eng-mecanica" element={<PrivateRoute><VideosMecanica/></PrivateRoute>}/>
             <Route path="/videos/eng-de-petroleo" element={<PrivateRoute><VideosPertoleo/></PrivateRoute>}/>
             <Route path="/videos/eng-ambiental" element={<PrivateRoute><VideosAmbiental/></PrivateRoute>}/>
            <Route path="/videos/eng-eletrica" element={<PrivateRoute><VideosEletrica/></PrivateRoute>}/>
            <Route path="/videos/eng-aeroespacial" element={<PrivateRoute><VideosAero/></PrivateRoute>}/>
            <Route path="/videos/eng-de-producao" element={<PrivateRoute><VideosProducao/></PrivateRoute>}/>
           <Route path="/videos/eng-biomedica" element={<PrivateRoute><VideosBiomedica/></PrivateRoute>}/>
           <Route path="/audio/eng-civil" element={<PrivateRoute><AudioCivil/></PrivateRoute>}/>
          <Route path="/audio/eng-quimica" element={<PrivateRoute><AudiosQuimica/></PrivateRoute>}/>
          <Route path="/audio/eng-mecanica" element={<PrivateRoute><AudioMecanica/></PrivateRoute>}/>
         <Route path="/audio/eng-de-petroleo" element={<PrivateRoute><AudiosPertoleo/></PrivateRoute>}/>
         <Route path="/audio/eng-de-producao" element={<PrivateRoute><AudiosProducao/></PrivateRoute>}/>
         <Route path="/audio/eng-eletrica" element={<PrivateRoute><AudiosEletrica/></PrivateRoute>}/>
              <Route path="/audio/eng-ambiental" element={<PrivateRoute><AudiosAmbiental/></PrivateRoute>}/>
       <Route path="/audio/eng-aeroespacial" element={<PrivateRoute><AudiosAero/></PrivateRoute>}/>
       <Route path="/audio/eng-biomedica" element={<PrivateRoute><AudiosBiomedico/></PrivateRoute>}/>
       <Route path="/livroo/eng-civil" element={<PrivateRoute><LivrosCivil/></PrivateRoute>}/>
      <Route path="/livro/eng-mecanica" element={<PrivateRoute><LivrosMecanica/></PrivateRoute>}/>
      <Route path="/livroo/eng-quimica" element={<PrivateRoute><LivrosQuimica/></PrivateRoute>}/>
      <Route path="/livro/eng-de-petroleo" element={<PrivateRoute><LivrosPetroleo/></PrivateRoute>}/>
      <Route path="/livroo/eng-de-producao" element={<PrivateRoute><LivrosProducao/></PrivateRoute>}/>
     <Route path="/livro/eng-ambiental" element={<PrivateRoute><LivrosAmbiental/></PrivateRoute>}/>
     <Route path="/livro/eng-biomedica" element={<PrivateRoute><LivrosBiomedica/></PrivateRoute>}/>
     <Route path="/livro/eng-aeroespacial" element={<PrivateRoute><LivrosAero/></PrivateRoute>}/>
     <Route path="/pdf/eng-civil" element={<PrivateRoute><PDFSCivil/></PrivateRoute>}/>
     <Route path="/pdf/eng-mecanica" element={<PrivateRoute><PDFsMecanica/></PrivateRoute>}/>
     <Route path="/pdf/eng-quimica" element={<PrivateRoute><PDFsQumica/></PrivateRoute>}/>
     <Route path="/pdf/eng-de-petroleo" element={<PrivateRoute><PDFsPetroleo/></PrivateRoute>}/>
     <Route path="/pdf/eng-de-producao" element={<PrivateRoute><PDFsProducao/></PrivateRoute>}/>
     <Route path="/pdf/eng-ambiental" element={<PrivateRoute><PDFsAmbiental/></PrivateRoute>}/>
     <Route path="/pdf/eng-aeroespacial" element={<PrivateRoute><PDFsAero/></PrivateRoute>}/>
     <Route path="/pdf/eng-biomedica" element={<PrivateRoute><PDFsBiomedico/></PrivateRoute>}/>
     <Route path="/slides/eng-civil" element={<PrivateRoute><SlidesCivil/></PrivateRoute>}/>
     <Route path="/slides/eng-mecanica" element={<PrivateRoute><SlidesMecanica/></PrivateRoute>}/>
     <Route path="/slides/eng-quimica" element={<PrivateRoute><SlidesQuimica/></PrivateRoute>}/>
     <Route path="/slides/eng-de-producao" element={<PrivateRoute><SlidesProducao/></PrivateRoute>}/>
     <Route path="/slides/eng-ambiental" element={<PrivateRoute><SlidesAmbiental/></PrivateRoute>}/>
     <Route path="/slides/eng-aeroespacial" element={<PrivateRoute><SlidesAero/></PrivateRoute>}/>
     <Route path="/slides/eng-biomedica" element={<PrivateRoute><SlidesBiomedico/></PrivateRoute>}/>
    <Route path="/slides/eng-eletrica" element={<PrivateRoute><SlidesEletica></SlidesEletica></PrivateRoute>}/>
     <Route path="/doc/eng-civil" element={<PrivateRoute><DocsCivil/></PrivateRoute>}/>
     <Route path="/livro/eng-eletrica" element={<PrivateRoute><LivrosEletrica/></PrivateRoute>}/>
     <Route path="/pdf/eng-eletrica" element={<PrivateRoute><PDFsEletrica/></PrivateRoute>}/>
     <Route path="/doc/eng-eletrica" element={<PrivateRoute><DocsEletrica/></PrivateRoute>}/>
     <Route path="/doc/eng-mecanica" element={<PrivateRoute><DocsMecanica/></PrivateRoute>}/>
     <Route path="/doc/eng-quimica" element={<PrivateRoute><DocsQuimica/></PrivateRoute>}/>
     <Route path="/doc/eng-de-producao" element={<PrivateRoute><DocsProducao></DocsProducao></PrivateRoute>}/>
     <Route path="/doc/eng-ambiental" element={<PrivateRoute><DocsAmbiental/></PrivateRoute>}/>
     <Route path="/doc/eng-aeroespacial" element={<PrivateRoute><DocsAero/></PrivateRoute>}/>
     <Route path="/doc/eng-biomedica" element={<PrivateRoute><DocsBioMedica/></PrivateRoute>}/>
     <Route path="/doc/eng-de-petroleo" element={<PrivateRoute><DocsPetroleo/></PrivateRoute>}/>

              {/* Notícias */}
            <Route path="/news" element={<PrivateRoute><News /></PrivateRoute>} />
            <Route path="/news/1" element={<PrivateRoute><NewsDetails /></PrivateRoute>} />
              <Route path="/news/2" element={<PrivateRoute><NewsJC/></PrivateRoute>}/>
              <Route path="/news/3" element={<PrivateRoute><NewsRandom/></PrivateRoute>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;

