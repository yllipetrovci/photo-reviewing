import { render } from '@testing-library/react';
import ThumbnailPhoto from '../components/ThumbnailPhoto';

describe('thumbnail photo ', () => {
    it('render thumbnail photo img', () => {
        const item = {
            urls: {
                small: "https://images.unsplash.com/photo-1650125980667-97bfaffc6672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjQ0OTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTE0NDU2NjU&ixlib=rb-1.2.1&q=80&w=400",
            }
        };
        const { container } = render(<ThumbnailPhoto item={item} />);

        const img = container.querySelector(".bg-image");
        expect(img.src).toBe(item.urls.small);
    })
})