import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Markdown = ({ textValue }) => {
	return (
		<div>
			<h1>Markdown</h1>
			<ReactMarkdown
				children={textValue}
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || '');
						return !inline && match ? (
							<SyntaxHighlighter
								children={String(children).replace(/\n$/, '')}
								style={dark}
								language={match[1]}
								PreTag="div"
								{...props}
							/>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				}}
			/>
		</div>
	);
};

export default Markdown;
