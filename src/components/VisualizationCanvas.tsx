import React, { useEffect, useRef } from 'react';
import './VisualizationCanvas.css';

interface VisualizationProps {
  data: {
    songDetails: any[];
    avgTempo: number;
    avgVocalRange: number;
  };
}

const VisualizationCanvas: React.FC<VisualizationProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current || !data) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // キャンバスの設定
    const size = 500;
    canvas.width = size;
    canvas.height = size;
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, size, size);
    
    // テンポに基づくテクスチャスタイルの決定
    const avgTempo = data.avgTempo;
    let textureStyle = '滑らかなグラデーション';
    
    if (avgTempo <= 60) textureStyle = '滑らかなグラデーション';
    else if (avgTempo <= 80) textureStyle = '柔らかいグラデーション';
    else if (avgTempo <= 100) textureStyle = '中間的なテクスチャ';
    else if (avgTempo <= 120) textureStyle = '軽いエッジのテクスチャ';
    else if (avgTempo <= 140) textureStyle = '活発なテクスチャ';
    else if (avgTempo <= 160) textureStyle = 'エッジのあるテクスチャ';
    else textureStyle = '強調されたエッジのテクスチャ';
    
    // 音域の広がりに基づく分布
    const avgVocalRange = data.avgVocalRange;
    const spread = avgVocalRange / 28;
    
    // 各曲の表現を描画
    data.songDetails.forEach((detail, index) => {
      const brightness = detail.brightnessPercent / 100;
      const saturation = detail.saturationPercent / 100;
      
      let { r, g, b } = detail;
      
      if (brightness < 1) {
        r = Math.floor(r * brightness);
        g = Math.floor(g * brightness);
        b = Math.floor(b * brightness);
      }
      
      if (saturation < 1) {
        const gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
        r = Math.floor(r * saturation + gray * (1 - saturation));
        g = Math.floor(g * saturation + gray * (1 - saturation));
        b = Math.floor(b * saturation + gray * (1 - saturation));
      }
      
      const color = `rgb(${r}, ${g}, ${b})`;
      
      const angle = (index / 5) * Math.PI * 2;
      const spreadRadius = size * 0.35 * spread;
      const centerX = size / 2;
      const centerY = size / 2;
      const x = centerX + Math.cos(angle) * spreadRadius;
      const y = centerY + Math.sin(angle) * spreadRadius;
      
      const radius = size * 0.15;
      
      if (textureStyle === '滑らかなグラデーション' || textureStyle === '柔らかいグラデーション') {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.globalAlpha = textureStyle === '滑らかなグラデーション' ? 0.7 : 0.8;
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      } else if (textureStyle === '中間的なテクスチャ') {
        ctx.globalAlpha = 0.8;
        for (let i = 0; i < 20; i++) {
          const innerRadius = radius * (1 - i / 30);
          const randomAngle = Math.random() * Math.PI * 2;
          const distance = Math.random() * radius * 0.5;
          const dotX = x + Math.cos(randomAngle) * distance;
          const dotY = y + Math.sin(randomAngle) * distance;
          
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.arc(dotX, dotY, innerRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (textureStyle === '軽いエッジのテクスチャ' || textureStyle === '活発なテクスチャ') {
        ctx.globalAlpha = 0.8;
        
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        for (let i = 0; i < 6; i++) {
          const innerAngle = (i / 6) * Math.PI * 2;
          const innerX = x + Math.cos(innerAngle) * radius * 0.7;
          const innerY = y + Math.sin(innerAngle) * radius * 0.7;
          
          ctx.globalAlpha = 0.3;
          ctx.beginPath();
          ctx.fillStyle = 'white';
          ctx.arc(innerX, innerY, radius * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        ctx.globalAlpha = 0.85;
        
        ctx.beginPath();
        ctx.fillStyle = color;
        
        if (textureStyle === '強調されたエッジのテクスチャ') {
          for (let i = 0; i < 8; i++) {
            const innerAngle = (i / 8) * Math.PI * 2;
            const outerAngle = ((i + 0.5) / 8) * Math.PI * 2;
            const innerRadius = radius * 0.6;
            
            if (i === 0) {
              ctx.moveTo(x + Math.cos(innerAngle) * radius, y + Math.sin(innerAngle) * radius);
            } else {
              ctx.lineTo(x + Math.cos(innerAngle) * radius, y + Math.sin(innerAngle) * radius);
            }
            
            ctx.lineTo(x + Math.cos(outerAngle) * innerRadius, y + Math.sin(outerAngle) * innerRadius);
          }
          ctx.closePath();
        } else {
          for (let i = 0; i < 6; i++) {
            const polyAngle = (i / 6) * Math.PI * 2;
            const polyX = x + Math.cos(polyAngle) * radius;
            const polyY = y + Math.sin(polyAngle) * radius;
            
            if (i === 0) {
              ctx.moveTo(polyX, polyY);
            } else {
              ctx.lineTo(polyX, polyY);
            }
          }
          ctx.closePath();
        }
        
        ctx.fill();
        
        ctx.globalAlpha = 0.4;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    });
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.3;
    
    const centerGradient = ctx.createRadialGradient(
      size/2, size/2, 0, 
      size/2, size/2, size * 0.25
    );
    
    const avgColor = getAverageColor(data.songDetails);
    centerGradient.addColorStop(0, `rgb(${avgColor.r}, ${avgColor.g}, ${avgColor.b})`);
    centerGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = centerGradient;
    ctx.beginPath();
    ctx.arc(size/2, size/2, size * 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    
  }, [data]);
  
  const getAverageColor = (details: any[]) => {
    let totalR = 0, totalG = 0, totalB = 0;
    
    details.forEach(detail => {
      totalR += detail.r;
      totalG += detail.g;
      totalB += detail.b;
    });
    
    return {
      r: Math.floor(totalR / details.length),
      g: Math.floor(totalG / details.length),
      b: Math.floor(totalB / details.length)
    };
  };
  
  return (
    <div className="visualization-wrapper">
      <h2>あなたの音楽の好みの可視化</h2>
      <div className="canvas-container">
        <canvas 
          ref={canvasRef} 
          className="visualization-canvas"
        ></canvas>
      </div>
      <div className="visualization-info">
        <p>
          <strong>平均テンポ:</strong> {data.avgTempo} BPM
          <br />
          <strong>音域の広がり:</strong> {data.avgVocalRange} 半音
        </p>
        <p className="visualization-desc">
          この可視化は、あなたが選んだ5曲の特徴を元に生成されています。
          色は楽曲のキーを、広がりは音域を、テクスチャはテンポを表現しています。
        </p>
      </div>
    </div>
  );
};

export default VisualizationCanvas;