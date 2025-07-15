import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormPage({ formData, setFormData }) {
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                technologies: checked
                    ? [...prev.technologies, value]
                    : prev.technologies.filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="container">
            <h1>アンケート</h1>

            <div className="form-group">
                <label>名前：
                    <input name="name" value={formData.name} onChange={handleChange} />
                </label>
            </div>

            <div className="form-group">
                <label>年齢：
                    <input name="age" type="number" value={formData.age} onChange={handleChange} />
                </label>
            </div>

            <div className="form-group">
                <label>性別：</label>
                <div className="option-group">
                    {['男性', '女性', 'その他'].map(g => (
                        <label key={g}>
                            <input
                                type="radio"
                                name="gender"
                                value={g}
                                checked={formData.gender === g}
                                onChange={handleChange}
                            />
                            {g}
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>興味のある技術：</label>
                <div className="option-group">
                    {['HTML', 'CSS', 'JavaScript', 'React'].map(tech => (
                        <label key={tech}>
                            <input
                                type="checkbox"
                                value={tech}
                                checked={formData.technologies.includes(tech)}
                                onChange={handleChange}
                            />
                            {tech}
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-group">
                <label>コメント：
                    <textarea name="comment" value={formData.comment} onChange={handleChange} />
                </label>
            </div>

            <div className="button-wrapper">
                <button onClick={() => navigate('/confirm')}>確認する</button>
            </div>

        </div>
    );
}
