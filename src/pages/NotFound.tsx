
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button>
            Return to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
