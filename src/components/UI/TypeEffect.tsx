import Typewriter from 'typewriter-effect';

export function TypeText() {
    return (
        <Typewriter
            options={{
                strings: ['Full stack Developer', 'Web Developer', 'Backend Developer', 'Web Designer'],
                autoStart: true,
                loop: true,
                delay: 10
            }}
        />
    )
}
