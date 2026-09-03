import Carousel from 'react-bootstrap/Carousel';


function Customcarousels() {
  return (
    <Carousel interval={1000}>
      <Carousel.Item>
        <img style={{width:'100w',height:'500px'}} src='https://www.federal.bank.in/documents/d/guest/artboard-swiggy' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100w',height:'500px'}} src='https://static.wixstatic.com/media/4f25fa_bd068647f967441c9f5b8900f99cddd4~mv2.png/v1/fill/w_840,h_294,al_c,lg_1,q_85,enc_avif,quality_auto/4f25fa_bd068647f967441c9f5b8900f99cddd4~mv2.png' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100w',height:'500px'}} src='https://telugu.cdn.zeenews.com/telugu/sites/default/files/Zepto.jpg' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Customcarousels;