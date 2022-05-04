import { render, screen } from '@testing-library/react';
import MainPhoto from '../components/MainPhoto';

describe('MainPhoto', () => {
    const imageSrc = "https://images.unsplash.com/photo-1650125980667-97bfaffc6672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjQ0OTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTE0NDU2NjU&ixlib=rb-1.2.1&q=80&w=400";
    it('render image', () => {
        const { container } = render(<MainPhoto imageURL={imageSrc} isLoading={false} />);

        const img = container.querySelector(".main-photo");
        expect(img.src).toBe(imageSrc);
    });

    it('render loading', ()=>{
        render(<MainPhoto imageURL={imageSrc} isLoading={true} />);
        const text = screen.getByText('Loading...');
        expect(text).toBeInTheDocument();
    });
});