export const Prose: React.FC = ({ children }) => {
  document.querySelector('.image-container p:first-of-type').classList.add('lead')
  return (
    <div className="max-w-none prose prose-a:text-pink-600 dark:prose-invert image-container">
      {children}
    </div>
  );
};
