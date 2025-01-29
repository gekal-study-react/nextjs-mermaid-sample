import React, {useEffect, useRef} from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    chart: string;
}

const MermaidRenderer: React.FC<MermaidProps> = ({chart}) => {
    const mermaidRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mermaidRef.current) {
            try {
                mermaid.initialize({startOnLoad: true});
                mermaid.render(`mermaid-${crypto.randomUUID()}`, chart).then(svg=>{
                    // mermaidRef.current.innerHTML = svg;
                    console.log(svg);
                });

            } catch (error) {
                console.error('Failed to render Mermaid diagram:', error);
            }
        }
    }, [chart]);

    return <div ref={mermaidRef}/>;
};

export default MermaidRenderer;