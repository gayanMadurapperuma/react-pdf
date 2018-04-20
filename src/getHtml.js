import ReactDOMServer from 'react-dom/server';

export const ht = (element) => {
    return ReactDOMServer.renderToStaticMarkup(element);
}
