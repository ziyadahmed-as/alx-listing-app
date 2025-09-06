import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ALX Listing App</h1>
      <Button onClick={() => alert('Clicked!')} variant="primary">
        Click Me
      </Button>
      <Card 
        title="Sample Property"
        description="Beautiful property located in a prime area."
        imageUrl="/assets/placeholder.jpg"
      />
    </div>
  );
}