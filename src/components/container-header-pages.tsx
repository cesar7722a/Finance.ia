type ContainerHeaderPagesProps = {
  children: React.ReactNode;
};

export function ContainerHeaderPages({ children }: ContainerHeaderPagesProps) {
  return (
    <div className="py-8 flex justify-between items-center">{children}</div>
  );
}
