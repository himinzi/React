import './App.css';
import FilterableProductTable from './Product'

function Header(props) { // 속성을 읽어내는 props
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
      <span>
                ⊂_ヽ <br></br>
                　 ＼＼ Λ＿Λ  <br></br>
                　　 ＼( ‘ㅅ’ ) 두둠칫 <br></br>
                　　　 &gt;　⌒ヽ <br></br>
                　　　/ 　 へ＼ <br></br>
                　　 /　　/　＼＼ <br></br>
                　　 ﾚ　ノ　　 ヽ_つ <br></br>
                　　/　/두둠칫 <br></br>
                　 /　/| <br></br>
                　(　(ヽ <br></br>
                　|　|、＼ <br></br>
                　| 丿 ＼ ⌒) <br></br>
                　| |　　) / <br></br>
                `ノ )　　Lﾉ <br></br>
            </span>
    </header>
  )
}

function Nav(props) {
  const lis = []; 
  for (let i = 0; i < props.topics.length; i++) {
    const topic = props.topics[i];
    lis.push(<li key={topic.id}><a href={'/read/' + topic.id}>{topic.title}</a></li>)

  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Gallery(props) {
  const img =[]; 
  // let img = props.images.map(p=>  // Map으로 하면 더 편함 !!!!
  // <div className="col p-1" key ={p["description"]}><img src={p["image-url"]} width='200' height='200' alt={p["description"]}></img></div>
  // )
  for(let i=0; i<props.images.length; i++){
    let src = props.images[i];
    img.push(<div className="col p-1" key ={src["description"]}><img src={src["image-url"]} width='200' height='200' alt={src["description"]}></img></div>)
  }
  return (
  <div className="container">
    <div className="row">
      {img}
    </div>
  </div>)
}

function App() {
  const images = [{
    "description": "Lady with a Teddy",
    "image-url": "https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/bc152e3e17f143509c188d54363e5ff3~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1738275234&x-signature=2jFiyYLH8dk14fXHkK4YrkoB%2BNI%3D"
  },
  {
    "description": "Girl with camera",
    "image-url": "https://i.pinimg.com/736x/e1/8c/ff/e18cff4d41bcb949d6c53b8b75aab85e.jpg"
  },
  {
    "description": "Beautiful Girl with Glasses",
    "image-url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBgkOMkR5fQYnpeoyAuNRgHeK0F-FPRg4NXR4Bc4WpWtl9qVium_LKGiNsLUkHIAI1WM&usqp=CAU"
  },
  {
    "description": "Redhead with frackles",
    "image-url": "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/287/4cd9e23b520b2d38a47857aa25b8fdc3_res.jpeg"
  },
  {
    "description": "Girl in black dress",
    "image-url": "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/988/a687cdf8ccf79740005d2d2d4949e5f1_res.jpeg"
  },
  {
    "description": "Girl Sitting on Chair",
    "image-url": "https://news.koreadaily.com/data/photo/2023/12/17/836c5992-a81e-47d1-97c2-df0cee8e6409.jpg"
  }
]
  const topics = [{ id: 1, title: '타', body: '바' }, { id: 2, title: '이', body: '아' }, { id: 3, title: '틀', body: '디' }]; //list 돌릴때는 반드시 id key 값이 필요함. 
  return (
    <div>
      <FilterableProductTable/>
      {/* <Gallery images={images}/>
      <Header title="REACTWWW" />
      <Header />
      <Header />
      <Nav topics={topics} />
      <Article title="Welc😀me" body="Hell🤗, WEB" />
      <Article title="HEY" body="Hell🤗, 🤡" /> */}
    </div>
  );
}

export default App;