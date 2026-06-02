import { BOOKS } from '../constants/books';
import { TEST_BOOKS } from '../constants/testingConstants';

test("Check author name is correct", () => {
    BOOKS.forEach((book, index) => {
        expect(BOOKS[index].author).toBe(TEST_BOOKS[index].author);
    })
});