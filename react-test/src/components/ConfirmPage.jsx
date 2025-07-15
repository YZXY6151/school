import { useNavigate } from 'react-router-dom';

export default function ConfirmPage({ formData }) {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>確認</h1>

            <div className="confirm-content">
                {[
                    ['名前', formData.name],
                    ['年齢', formData.age],
                    ['性別', formData.gender],
                    ['興味', formData.technologies.join(', ')],
                    ['コメント', formData.comment]
                ].map(([label, value]) => (
                    <div className="row" key={label}>
                        <div className="label">{label}：</div>
                        <div className="value">{value}</div>
                    </div>
                ))}
            </div>


            <div className="button-wrapper">
                <button onClick={() => window.location.href = '/'}>戻る</button>
                <button onClick={() => navigate('/thankyou')}>送信</button>
            </div>
        </div>
    );
}
