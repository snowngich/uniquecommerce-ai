
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface AIFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  linkText: string;
  onClick: () => void;
}

const AIFeatureCard: React.FC<AIFeatureCardProps> = ({
  title,
  description,
  icon,
  accentColor,
  linkText,
  onClick,
}) => {
  return (
    <Card className="overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-brand-yellow/70">
      <div className={`h-2 ${accentColor}`}></div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow/20 text-brand-yellow-dark">
              {icon}
            </span>
            <CardTitle className="text-lg font-semibold flex items-center">
              {title}
              <Sparkles size={12} className="ml-2 text-brand-yellow-dark" />
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground mb-4">
          {description}
        </CardDescription>
        <Button 
          variant="outline" 
          className="w-full border-brand-yellow text-brand-yellow-dark hover:bg-brand-yellow hover:text-foreground"
          onClick={onClick}
        >
          {linkText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIFeatureCard;
