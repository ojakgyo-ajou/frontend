import React from 'react';
import { Link } from 'react-router';

interface ArticleCardProps {
  title: string;
  source: string;
  date: string;
  url: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, source, date, url }) => {
  return (
    <Link to={url} className="w-full p-4 bg-neutral-50 rounded-lg inline-flex flex-col gap-2.5">
      <div className="self-stretch flex flex-col gap-1.5">
        <div className="text-black text-base font-bold">{title}</div>
        <div className="opacity-80 inline-flex items-center gap-3">
          <div className="text-muted-foreground text-xs font-bold">{source}</div>
          <div className="text-muted-foreground text-xs font-bold">{date}</div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
