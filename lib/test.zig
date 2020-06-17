const std = @import("std");

pub fn main() !void {
    std.debug.warn("test", .{});
    std.debug.warn("oi", .{});
    if('a' > 25) {
        std.debug.warn("hmm", .{});
    }
}
