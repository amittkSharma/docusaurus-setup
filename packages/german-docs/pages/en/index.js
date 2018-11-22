const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + '/siteConfig.js')

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {' '}
          {this.props.children}{' '}
        </a>{' '}
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self',
}

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper"> {props.children} </div>{' '}
    </div>{' '}
  </div>
)

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />{' '}
  </div>
)

const ProjectTitle = props => (
  <h1 className="projectTitle">
    {' '}
    {siteConfig.title} <small> {siteConfig.tagline} </small>{' '}
  </h1>
)

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock"> {props.children} </div>{' '}
    </div>{' '}
  </div>
)

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || ''
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('project-logo.png')} />{' '}
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('german-tutorial/prepositions/prepositions.html', language)}>
              {' '}
              German Docs{' '}
            </Button>{' '}
            <Button href={docUrl('german-tutorial/prepositions/prepositions.html', language)}>
              {' '}
              Help...{' '}
            </Button>{' '}
          </PromoSection>{' '}
        </div>{' '}
      </SplashContainer>
    )
  }
}

const Block = props => (
  <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />{' '}
  </Container>
)

const Features = props => (
  <Block layout="fourColumn">
    {' '}
    {[
      {
        content: 'Define your concepts and relations in an easy GraphQL SDL',
        image: imgUrl('domain.png'),
        imageAlign: 'top',
        title: 'Domain Modelling',
      },
      {
        content:
          'Deploy your domain, create instances of your concepts. You can work with it like a graph database',
        image: imgUrl('graph.png'),
        imageAlign: 'top',
        title: 'Domain as Graph',
      },
      {
        content:
          'Define external linked-in data of your graph and access it in a unified way. The World Graph will take care of it.',
        image: imgUrl('federated_query_engine.jpg'),
        imageAlign: 'top',
        title: 'Federated Query engine',
      },
      {
        content: 'Chose from a rich set of components to speed-up your UI development.',
        image: imgUrl('components-library.png'),
        imageAlign: 'top',
        title: 'UI Toolkit',
      },
    ]}{' '}
  </Block>
)

const LearnHow = props => (
  <Block background="light">
    {' '}
    {[
      {
        content: `Get up and running quickly without having to worry about customization`,
        imageAlign: 'right',
        title: `[Getting started](${docUrl('installation.html', props.language || '')})`,
      },
    ]}{' '}
  </Block>
)

class Index extends React.Component {
  render() {
    let language = this.props.language || ''

    return (
      <div>
        <HomeSplash language={language} />{' '}
        <div className="mainContainer">
          <Features />
        </div>{' '}
      </div>
    )
  }
}

module.exports = Index
