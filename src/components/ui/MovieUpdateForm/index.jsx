import { useCallback, useEffect } from "react";
import DateInput from "../../ui/DateInput";
import TextInput from "../../ui/TextInput";

export default function MovieUpdateForm({ name, setName, genre, setGenre, year, setYear, movie }) {
    useEffect(() => {
        setName(movie.name);
        setGenre(movie.genre);
        setYear(movie.dateOfRelease);
    }, []);

    useEffect(() => {}, [name, genre, year]);

    const onChangeNameInput = useCallback(
        value => {
            setName(value);
        },
        [name]
    );

    const onChangeGenreInput = useCallback(
        value => {
            setGenre(value);
        },
        [genre]
    );

    const onChangeYearInput = useCallback(
        value => {
            setYear(value);
        },
        [genre]
    );

    return (
        <form className="flex flex-col gap-y-[64px] self-center">
            <div className="flex flex-col gap-y-[32px] mx-[64px]">
                <TextInput
                    label="Name"
                    placeholder="The Fast and The Furious"
                    value={name}
                    onChange={onChangeNameInput}
                />
                <TextInput label="Genre" placeholder="Action" value={genre} onChange={onChangeGenreInput} />
                <DateInput label="Year" value={year} onChange={onChangeYearInput} />
            </div>
        </form>
    );
}
