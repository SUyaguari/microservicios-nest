export function dialog(body: any) {

    
    const mockUser = {
        email: body.email,
        name: body.name,
        avatar: body.avatar,
        isTrue: true
    };

    return mockUser;
    
}