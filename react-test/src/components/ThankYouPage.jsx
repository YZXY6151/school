import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  return (
    <div className="container">
      <h1>送信ありがとうございました！</h1>
      <div className="button-wrapper">
        <Link to="/form" onClick={() => window.location.href = '/'} className="link-button">ホームに戻る</Link>
      </div>
    </div>
  );
}
