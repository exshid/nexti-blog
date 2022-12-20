export const Prose: React.FC = ({ children }) => {
  let lead = document.querySelector('.image-container-lead p:first-of-type') 
  if(lead){
  lead.classList.add('lead')}
  return (
    <div className="max-w-none prose prose-a:text-pink-600 dark:prose-invert image-container image-container-lead">
      {children}
    </div>
  );
};
