
export default function Home() {
  return (
   <div className = "container">
    <h1>creat acount</h1>
    <input type="text" placeholder="Enter Your name" required />
   <input type="number" placeholder=" phone number" required />
   <input type="password" placeholder="Enter Your password" required />
  <input type="password" placeholder="Confirm Your password" required />
  <button type="submit" className="b">Login</button>
   </div>
  );
}
