import React, {useEffect, useRef} from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    text: string;
}

const MermaidRenderer: React.FC<MermaidProps> = ({text}) => {
    const mermaidRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (mermaidRef.current && text != "") {
            try {
                mermaid.initialize({startOnLoad: true});
                mermaid.render(`mermaid-${crypto.randomUUID()}`, text).then(renderResult => {
                    console.log(typeof renderResult);
                    (mermaidRef.current as HTMLDivElement).innerHTML = renderResult.svg;
                });
            } catch (error) {
                console.error('Failed to render Mermaid diagram:', error);
            }
        }
    }, [text]);

    return <div ref={mermaidRef}/>;
};

export default MermaidRenderer;
