
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  // This page now redirects to Home
  toast({
    title: "Redirecting to home page",
    duration: 1000,
  });
  
  return <Navigate to="/" replace />;
};

export default Index;
