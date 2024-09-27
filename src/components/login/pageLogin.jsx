import PhotoSlider from "./loginForm";

const images = [
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2",
  "https://via.placeholder.com/800x400?text=Image+3",
];

function Login() {
  return (
    <div className="App">
      <PhotoSlider images={images} />
    </div>
  );
}

export default Login;
