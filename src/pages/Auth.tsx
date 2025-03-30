
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder for Supabase auth
    setTimeout(() => {
      toast({
        title: "Authentication",
        description: "Please connect Supabase to enable authentication functionality.",
      });
      setLoading(false);
    }, 1000);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder for Supabase auth
    setTimeout(() => {
      toast({
        title: "Authentication",
        description: "Please connect Supabase to enable authentication functionality.",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="border-2 border-brand-yellow/20">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your account or create a new one
            </CardDescription>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-yellow/10 px-3 py-1 text-xs font-medium text-brand-yellow-dark">
                <Sparkles size={12} />
                AI-Powered Shopping
              </span>
            </div>
          </CardHeader>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <form onSubmit={handleSignIn}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-foreground" 
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignUp}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-foreground" 
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Creating account..." : "Sign Up"}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
          <div className="p-6 pt-0 text-center text-xs text-muted-foreground">
            By continuing, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
